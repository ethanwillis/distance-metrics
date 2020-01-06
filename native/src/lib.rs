#[macro_use]
extern crate neon;
extern crate num_cpus;

use neon::prelude::*;
use neon::register_module;

fn manhattan_distance(mut cx: FunctionContext) -> JsResult<JsNumber> {
    let js_vector1: Handle<JsArray> = cx.argument(0)?;
    let js_vector2: Handle<JsArray> = cx.argument(1)?;
    let vector1: Vec<Handle<JsValue>> = js_vector1.to_vec(&mut cx)?;
    let vector2: Vec<Handle<JsValue>> = js_vector2.to_vec(&mut cx)?;

    // Calculate the manhattan distance for vector1 and vector2
    // Precondition vector1.len() == vector2.len()
    let mut sum: f64 = 0.0;

    for i in 0..vector1.len() {
        // TODO: Unwrap is potentially unsafe?
        let num1 = vector1.get(i).unwrap().downcast::<JsNumber>().unwrap();
        let num2 = vector2.get(i).unwrap().downcast::<JsNumber>().unwrap();
        sum += f64::abs(num1.value() - num2.value());
    }

    Ok(cx.number(sum as f64))
}

register_module!(mut m, {m.export_function("manhattanDistanceNative", manhattan_distance)});
