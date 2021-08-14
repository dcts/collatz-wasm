use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn collatz(seed: i32) -> Vec<i32> {
    // initialize sequence with seed
    let mut sequence: Vec<i32> = vec![seed];
    let mut next_number: i32 = collatz_next_number(seed);
    while !sequence.contains(&next_number) {
        sequence.push(next_number);
        next_number = collatz_next_number(next_number);
    }
    sequence
}

#[wasm_bindgen]
pub fn collatz_next_number(input: i32) -> i32 {
    if input % 2 == 0 { // if input is even
        input / 2
    } else { // if number is odd
        input * 3 + 1
    }
}



#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn correct_sequences_generated() {
        assert_eq!(collatz(4), vec![4,2,1]);
        assert_eq!(collatz(5), vec![5,16,8,4,2,1]);
        assert_eq!(collatz(10), vec![10,5,16,8,4,2,1]);
    }
}
