using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S06_Enemy : MonoBehaviour
{
    [HideInInspector]
    public Transform player;

    [HideInInspector]
    public float enemySpeed = 0f;

    [HideInInspector]
    public float killDistance = 0f;

    void Start()
    {
        float playerDistance = Vector2.Distance(player.position, transform.position);
        Debug.LogFormat("Soy un nuevo enemigo ({0}). Distancia al player: {1}", name, playerDistance);
    }

    // TODO: Acercarse al jugador y si está a menos de una distancia dada, "matarlo"
    private void Update()
    {
        if (player == null) return;

        Vector3 playerVector = player.position - transform.position;

        // Opción 1: Moverse a mano
        Vector3 speedDirection = playerVector.normalized;
        transform.position += speedDirection * enemySpeed * Time.deltaTime;

        // Opción 2: MoveTowards
        //transform.position = Vector3.MoveTowards(transform.position, player.position, enemySpeed * Time.deltaTime);

        
        if (playerVector.sqrMagnitude < killDistance * killDistance)
        // También 
        //if (Vector3.Distance(transform.position, player.position) < killDistance)
        {
            Debug.Log("Alcancé al enemigo :)");
            Destroy(player.gameObject);
        }
    }
}
