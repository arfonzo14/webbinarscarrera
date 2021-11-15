using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S02_03_Magnitud : MonoBehaviour
{
    public Vector2 testVector;

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.M))
        {
            Debug.LogFormat("La Longitud de {0} es {1}", testVector, Magnitud(testVector));
            Debug.LogFormat("El vector {0} normalizado es {1}", testVector, Normalizar(testVector));
            Debug.Log("Usando normalized: " + testVector.normalized);
            Debug.Log("El vector sigue siendo: " + testVector);
            testVector.Normalize();
            Debug.Log("El vector tras .Normalize(): " + testVector);
        }
    }

    Vector2 Normalizar(Vector2 v)
    {
        return v / Magnitud(v);
    }

    float Magnitud(Vector2 v)
    {
        return Mathf.Sqrt(v.x * v.x + v.y * v.y);
    }

    private void OnDrawGizmos()
    {
        Gizmos.color = Color.white;
        Gizmos.DrawSphere(Vector3.zero, 1f);
        Gizmos.color = Color.red;
        Gizmos.DrawLine(Vector3.zero, testVector);
        Gizmos.color = Color.blue;
        Gizmos.DrawLine(Vector3.zero, testVector.normalized);
    }
}
