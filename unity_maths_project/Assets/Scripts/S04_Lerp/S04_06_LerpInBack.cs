using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S04_06_LerpInBack : S04_03_LerpPositionBase
{
    protected override float TFunc()
    {
        return (t * t * (2.70158f * t - 1.70158f));
    }
}
