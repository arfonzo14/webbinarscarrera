using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S03_03_SinCos : S03_03_TrigoBase
{
    void Update()
    {
        transform.localPosition = new Vector3(Mathf.Cos(Time.time * freq), Mathf.Sin(Time.time * freq), 0f) * amplitude;
    }
}
