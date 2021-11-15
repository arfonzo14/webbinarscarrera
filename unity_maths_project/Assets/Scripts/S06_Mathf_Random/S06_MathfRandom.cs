using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class S06_MathfRandom : MonoBehaviour
{
    public Transform playerTransform;
    [Header("Enemy Setup")]
    public GameObject enemyPrefab;
    public float minEnemySpeed = 0.5f;
    public float maxEnemySpeed = 1f;
    [Header("Spawn setup")]
    public float minSpawnTime = 1f;
    public float maxSpawnTime = 5f;
    public float minSpawnRange = 1f;
    public float maxSpawnRange = 7f;
    [Header("Game Settings")]
    public float killDistance = 0.1f;

    void Start()
    {
        StartCoroutine(SpawnEnemyCoroutine());
    }

    IEnumerator SpawnEnemyCoroutine()
    {
        int enemyNumber = 0;

        while (true)
        {
            float waitTime = Random.Range(minSpawnTime, maxSpawnTime);
            yield return new WaitForSeconds(waitTime);

            if (playerTransform == null) yield break;

            float playerDistance = Random.Range(minSpawnRange, maxSpawnRange);
            Vector2 newPosition = (Vector2)playerTransform.position +
                Random.insideUnitCircle.normalized * playerDistance;

            GameObject newEnemy = Instantiate(enemyPrefab, newPosition, Quaternion.identity);
            newEnemy.name = string.Format("Enemy #{0:00}", enemyNumber++);

            newEnemy.GetComponent<SpriteRenderer>().color = Random.ColorHSV();

            S06_Enemy enemy = newEnemy.AddComponent<S06_Enemy>();
            enemy.player = playerTransform;
            enemy.enemySpeed = Random.Range(minEnemySpeed, maxEnemySpeed);
            enemy.killDistance = killDistance;
        }
    }
}
