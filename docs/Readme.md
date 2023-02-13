# Play with Web Assembly

## Links

- [Wasm](https://webassembly.org/)

## Steps

- [X] wrote the html and JS to check how they interact. It is a placeholder for
      our code.
- [X] get the result from wasm.
- [X] Copy and use [Fibonacci in wasm](https://github.com/gthvn1/wasm_sandkasten/tree/master/fibonacci).
- [X] Before looking canvas we will look how to exchange data from memory because it
      will be usefull when playing with canvas...
- [ ] Look at canvas
- [ ] do more funky things

**Note1**: To do more funky things we followed the really cool presentation from
Ben Smith called [Hand-crafted WebAssembly Demos](https://www.youtube.com/watch?v=qEq3F9Z8z6w&t=21s).

## wat to wasm

- To complile web assembly text file (wat) into binary you need to use `wat2wasm`
  from the (web assembly toolkit)[https://github.com/WebAssembly/wabt].
    - Just run ``wat2wasm fibonacci.wat -o fibonacci.wasm`

- To get the wasm file as an hexadecimal string I used `hexdump`
  - `hexdump -ve '1/1 "0x%.2x,"' ./fibo.wasm`

- If you run `make` it will dump the hexa string
