using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S04_Player : MonoBehaviour
{
    public float speed = 5f;

    void Update()
    {
        transform.Translate(
            Input.GetAxis("Horizontal") * speed * Time.deltaTime,
            Input.GetAxis("Vertical") * speed * Time.deltaTime,
            0f);
    }
}
