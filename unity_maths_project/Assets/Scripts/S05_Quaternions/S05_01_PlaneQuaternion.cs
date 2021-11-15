using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Uso y aplicación - 2
public class S05_01_PlaneQuaternion : S05_01_PlaneEuler
{
    protected override void Applyrotation()
    {
        Vector3 newRotation = Vector3.zero;
        newRotation.x = pitch;
        newRotation.y = yaw;
        newRotation.z = -roll;

        Quaternion rotation = Quaternion.Euler(newRotation * rotationSpeed * Time.deltaTime);
        transform.rotation *= rotation;

        // También 
        // transform.Rotate(newRotation * rotationSpeed * Time.deltaTime);
    }
}