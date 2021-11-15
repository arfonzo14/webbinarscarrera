using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S01_Jerarquia : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.I))
        {
            ShowInfo();
        }
    }

    void ShowInfo()
    {
        Debug.LogFormat("{0}\tPosición global: {1}, Posición local: {2}", name, transform.position, transform.localPosition);
    }
}
