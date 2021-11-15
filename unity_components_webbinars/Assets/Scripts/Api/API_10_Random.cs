using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class API_10_Random : MonoBehaviour
{
    public GameObject[] prefabs;
    public float maxRange = 10f;
    private void Start()
    {
       
        Debug.Log("Valor aleatorio:" + Random.value);
        Debug.Log("Valor aleatorio en rango:" + Random.Range(5f, 10f));
    }

    private void Update()
    {
        
        if (Input.GetKeyDown(KeyCode.I))
        {
            int idx = Random.Range(0, prefabs.Length);
            Instantiate(prefabs[idx], Random.onUnitSphere * maxRange, Quaternion.identity);
        }
    }
}