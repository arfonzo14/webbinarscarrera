using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S04_CameraToPlayerPosition : MonoBehaviour
{
    public Transform playerTarget;

    public float moveSpeed = 1f;
    public float distanceToPlayer = 5f;

    float t = 1f;
    Vector3 startPosition;
    Vector3 targetPosition;

    private void Start()
    {
        startPosition = transform.position;
        targetPosition = transform.position;
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            t = 0f;
            startPosition = transform.position;
            targetPosition = playerTarget.position + Vector3.back * distanceToPlayer;
        }

        if (t <= 1f)
        {
            t += Time.deltaTime * moveSpeed;
            transform.position = startPosition + (targetPosition - startPosition) * t;
        }
       
    }
    void LateUpdate()
    {
        transform.LookAt(playerTarget);
    }
}
