using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S03_04_Atan2 : MonoBehaviour
{
    public Transform p1;
    public Transform p2;

    float angleP1 = 0f;
    float angleP2 = 0f;
    float angleDiff = 0f;

    void Update()
    {
        angleP1 = Mathf.Atan2(p1.localPosition.y, p1.localPosition.x) * Mathf.Rad2Deg;
        angleP2 = Mathf.Atan2(p2.localPosition.y, p2.localPosition.x) * Mathf.Rad2Deg;
        angleDiff = angleP2 - angleP1;
    }

    private void OnGUI()
    {
        GUI.color = Color.black;
        GUILayout.Label("Ángulo P1 - OX: " + angleP1);
        GUILayout.Label("Ángulo P2 - OX : " + angleP2);
        GUILayout.Label("Ángulo entre P1 y P2: " + angleDiff);
    }

    private void OnDrawGizmos()
    {
        if (p1 && p2)
        {
            Gizmos.color = Color.red;
            Gizmos.DrawLine(transform.position, p1.position);
            Gizmos.color = Color.blue;
            Gizmos.DrawLine(transform.position, p2.position);
        }

    }
}
