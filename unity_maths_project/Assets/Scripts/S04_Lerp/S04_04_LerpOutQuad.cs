using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S04_04_LerpOutQuad : S04_03_LerpPositionBase
{
    protected override float TFunc()
    {
        return t * t;
    }
}
