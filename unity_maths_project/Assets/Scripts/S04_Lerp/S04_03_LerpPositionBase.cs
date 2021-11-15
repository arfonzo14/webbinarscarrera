using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S04_03_LerpPositionBase : MonoBehaviour
{

    public float range = 1f;
    // Ejemplo 1, modificando t a mano desde el inspector
    [Range(0f, 1f)]
    public float t = 0f;
    public float speed = .2f;

    Vector3 p1;
    Vector3 p2;

    Vector3 initialPosition;


    private void Start()
    {
        initialPosition = transform.position;
    }

    void Update()
    {
        p1 = initialPosition + Vector3.left * range;
        p2 = initialPosition + Vector3.right * range;

        if (Input.GetKeyDown(KeyCode.R))
        {
            t = 0f;
        }

        transform.position = Interpolate();

        // Ejemplo 2, modificando t manualmente
        t += (Time.deltaTime * speed);

        if (t > 1f)
        {
            t = 0f;
        }

        // Tambien...
        // t %= 1f;
    }

    Vector3 Interpolate()
    {
        return p1 + (p2 - p1) * TFunc();
    }

    protected virtual float TFunc()
    {
        return t;
    }

    private void OnDrawGizmos()
    {
        Gizmos.color = Color.blue;
        Gizmos.DrawLine(p1, p2);
    }

}
