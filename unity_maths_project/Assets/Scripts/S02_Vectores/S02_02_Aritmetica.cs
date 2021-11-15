using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S02_02_Aritmetica : MonoBehaviour
{

    public Vector2 v1 = new Vector2(0, 0);
    public Vector2 v2 = new Vector2(1, 1);

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.S))
        {
            Evaluate("Suma", v1 + v2, Suma(v1, v2));
            Evaluate("Resta", v1 - v2, Resta(v1, v2));
            Evaluate("Resta", v2 - v1, Resta(v1, v2));
            Evaluate("Multiplicar", v2 * 2f, Multiplicar(v2, 2f));
            Evaluate("Dividir", v2 / 4f, Dividir(v2, 4f));

        }
    }

    private void Evaluate(string opName, Vector2 expected, Vector2 calculated)
    {
        if (expected == calculated)
        {
            Debug.LogFormat("La operación {0} es OK: {1}", opName, calculated);
        }
        else
        {
            Debug.LogErrorFormat("Error en la operación {0}. Se esperaba {1} pero se obtuvo {2}", opName, expected, calculated);
        }
    }

    Vector2 Suma(Vector2 a, Vector2 b)
    {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    Vector2 Resta(Vector2 a, Vector2 b)
    {
        return new Vector2(b.x - a.x, b.y - a.y);
    }

    Vector2 Multiplicar(Vector2 v, float s)
    {
        return new Vector2(v.x * s, v.y * s);
    }

    Vector2 Dividir(Vector2 v, float s)
    {
        return new Vector2(v.x / s, v.y / s);
    }


}
