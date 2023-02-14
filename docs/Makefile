.PHONY: dump_string

fibonacci.wasm: fibonacci.wat
	wat2wasm $< -o $@

dump_string: fibonacci.wasm
	hexdump -ve '1/1 "0x%.2x,"' $<

