using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S03_01_Cos : MonoBehaviour
{
    [Range(0f, Mathf.PI * 2f)]
    public float angle = 0f; // En radianes [0, 2PI]

    void Update()
    {
        transform.localPosition = new Vector3(Mathf.Cos(angle), 0f, 0f);
    }
}
