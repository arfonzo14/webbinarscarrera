using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Uso y aplicación - 1
public class S05_01_PlaneEuler : MonoBehaviour
{
    public float rotationSpeed = 90f;

    protected float pitch; // X
    protected float yaw; // Y
    protected float roll; // Z

    void Update()
    {
        pitch = Input.GetAxis("Vertical");
        roll = Input.GetAxis("Horizontal");
        yaw = 0f;
        if (Input.GetKey(KeyCode.Q))
        {
            yaw = -1f;
        }
        else if (Input.GetKey(KeyCode.E))
        {
            yaw = 1f;
        }

        Applyrotation();
    }

    protected virtual void Applyrotation()
    {
        Vector3 newRotation = transform.eulerAngles;

        newRotation.x += pitch * rotationSpeed * Time.deltaTime;
        newRotation.y += yaw * rotationSpeed * Time.deltaTime;
        newRotation.z += -roll * rotationSpeed * Time.deltaTime;

        transform.eulerAngles = newRotation;
    }

    private void OnGUI()
    {
        GUI.color = Color.black;
        GUILayout.Label("Pitch: " + pitch);
        GUILayout.Label("Yaw: " + yaw);
        GUILayout.Label("Roll: " + roll);

    }
}
