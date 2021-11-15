using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S03_03_Sin : S03_03_TrigoBase
{
    void Update()
    {
        transform.localPosition = new Vector3(0f, Mathf.Sin(Time.time * freq), 0f) * amplitude;
    }
}
