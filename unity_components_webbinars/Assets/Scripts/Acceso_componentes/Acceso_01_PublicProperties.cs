using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Acceso_01_PublicProperties : MonoBehaviour
{
    public Transform otherTransform;
    public Transform[] transformsToWatch;

    void Start()
    {
        print("Using transform from " + otherTransform.name);

        for (int t = 0; t < transformsToWatch.Length; t++)
        {
            print("Vigil  transform of " + transformsToWatch[t].name);
        }
    }
}
