using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S04_01_Lerp : MonoBehaviour
{
    public float a = 0f;
    public float b = 10f;
    [Range(0f, 1f)]
    public float t = 0f;

    private void Start()
    {
        // Para probar el lerp
        Debug.Log(Lerp(0, 10, 0));
        Debug.Log(Lerp(0, 10, 1));
        Debug.Log(Lerp(0, 10, 0.5f));
        Debug.Log(Lerp(12, 24, .5f));
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.F))
        {
            Debug.LogFormat("Lerp({0}, {1}, {2}) = {3}", a, b, tag, Lerp(a, b, t));
        }
    }

    float Lerp(float a, float b, float t)
    {
        return a + (b - a) * t;
    }
}
