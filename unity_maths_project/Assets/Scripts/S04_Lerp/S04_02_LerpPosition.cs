using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S04_02_LerpPosition : MonoBehaviour
{
    public Transform p1;
    public Transform p2;

    // Ejemplo 1, modificando t a mano desde el inspector
    [Range(0f, 1f)]
    public float t = 0f;
    public float speed = 0.2f;

    private void Start()
    {
        if (p1 == null || p2 == null)
        {
            Debug.LogError("Necesito 2 transforms");
            Destroy(this);
        }
    }
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            t = 0f;
        }

        transform.position = Lerp(p1.position, p2.position, t);

        // Ejemplo 2, modificando t manualmente
        t += (Time.deltaTime * speed);

        if (t > 1f)
        {
            t = 0f;
        }

        // Tambien...
        // t %= 1f;
    }

    Vector3 Lerp(Vector3 a, Vector3 b, float t)
    {
        return a + (b - a) * t;
    }
}
