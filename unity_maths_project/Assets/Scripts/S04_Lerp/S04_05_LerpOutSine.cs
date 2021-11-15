using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S04_05_LerpOutSine : S04_03_LerpPositionBase
{
    protected override float TFunc()
    {
        return Mathf.Sin(t * Mathf.PI * .5f);
    }
}
