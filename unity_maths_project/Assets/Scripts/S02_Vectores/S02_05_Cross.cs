using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S02_05_Cross : MonoBehaviour
{

    Transform v1;
    Transform v2;
    private void Awake()
    {
        transform.position = Vector3.zero;

        v1 = new GameObject("v1").transform;
        v2 = new GameObject("v2").transform;
        v1.SetParent(transform);
        v2.SetParent(transform);

        v1.localPosition = Random.onUnitSphere;
        v2.localPosition = Random.onUnitSphere;
    }

    Vector3 Cross(Vector3 a, Vector3 b)
    {
        return new Vector3((a.y * b.z - a.z * b.y), (a.z * b.x - a.x * b.z), (a.x * b.y - a.y * b.x));
    }

    private void OnGUI()
    {
        if (v1 && v2)
        {
            GUI.color = Color.black;
            GUILayout.Label("Área: " + Cross(v1.localPosition, v2.localPosition).magnitude);
        }
    }
    private void OnDrawGizmos()
    {
        if (v1 && v2)
        {
            Gizmos.color = Color.red;
            Gizmos.DrawLine(transform.position, v1.position);
            Gizmos.color = Color.blue;
            Gizmos.DrawLine(transform.position, v2.position);

            Gizmos.color = Color.white;
            Gizmos.DrawLine(v1.position, v2.position);

            Gizmos.color = Color.green;
            Gizmos.DrawLine(transform.position, transform.position + Cross(v1.localPosition, v2.localPosition));
        }
    }
}
