# Play with Web Assembly and Zig

## Links

- [Wasm](https://webassembly.org/)
- [Zig](https://ziglang.org/)

## Steps

- [X] wrote the html and JS to check how they interact. It is a placeholder for our code.
- [X] get the result from wasm.
- [ ] Do more funky things

**Note1**: To do more funky things we followed the really cool presentation from Ben Smith called
[Hand-crafted WebAssembly Demos](https://www.youtube.com/watch?v=qEq3F9Z8z6w&t=21s).
**Note2**: We will probably try to do it in full Wasm.

## Zig to wasm

To generate wasm file:
- `zig build-lib fibo.zig -target wasm32-freestanding -dynamic`
  - **Note**: without dynamic it generates a *".a"* file.

To get the wasm file as an hexadecimal string I used `hexdump`
- `hexdump -ve '1/1 "0x%.2x,"' ./fibo.wasm`
