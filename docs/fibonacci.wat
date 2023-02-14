;; Bytes are 8-bit
;;
;; Memory map:
;;   The canvas size is 100x100 so we will need 40_000 bytes.
;;   Page in WASM are 64KB [0x0000..0xFFFF] so we will use the
;;   bottom of the memory is used for Fibonacci (We store 3 i64)
;;   and 40Kb started from 0x0100 for the canvas:
;;
;;   [0x0000 .. 0x0007] F(N-2): i64
;;   [0x0008 .. 0x000F] F(N-1): i64
;;   [0x0010 .. 0x0017] F(N)  : i64
;;   [0x1000 .. 0xAC3F] Canvas: 100 x 100 x 4
(memory (export "mem") 1)

(func $clear-screen (param $color i32)
  (local $i i32)
  (loop $loopBegin
    ;; mem[0x1000 + i] = color
    (i32.store offset=0x1000
      (local.get $i)
      (local.get $color))

    ;; update index
    (local.set $i
      (i32.add (local.get $i) (i32.const 4)))

    (br_if $loopBegin
      (i32.lt_s (local.get $i) (i32.const 40000)))
  )
)

(func (export "run")
  (call $clear-screen
    (i32.const 0xff_ec_ef_f4)) ;; ABGR format (nord6)
)

(func $fibo (export "fibo") (param $n i64)
  (local $step i64)

  ;; Init F(n-2) = 0 and F(n-1) = 1
  (i64.store (i32.const 0x0) (i64.const 0))
  (i64.store (i32.const 0x8) (i64.const 1))

  ;; F(0) = 0
  (if (i64.eq (i64.const 0) (local.get $n))
    (then (i64.store (i32.const 0x10) (i64.const 0))))

  ;; F(1) = 1
  (if (i64.eq (i64.const 1) (local.get $n))
    (then (i64.store (i32.const 0x10) (i64.const 1)))
    (else 
      ;; for N >= 2 we loop
      (local.set $step (i64.const 2))

      (loop $enter_loop
        ;; compute F(n)
        (i64.store (i32.const 0x10) ;; Offset of F(n)
          (i64.add ;; F(n-1) + F(n-2)
            (i64.load (i32.const 0x8))
            (i64.load (i32.const 0x0))))

        ;; Update F(n-2) with value of F(n-1)
        (i64.store (i32.const 0x0) ;; Offset of F(n-2)
          (i64.load (i32.const 0x8))) ;; value of F(n-1)

        ;; Update F(n-1) with value of F(N)
        (i64.store (i32.const 0x8)
          (i64.load (i32.const 0x10)))

        ;; update the step
        (local.set $step (i64.add (i64.const 1 (local.get $step))))

        (br_if $enter_loop
          (i64.le_s (local.get $step) (local.get $n)))
      )
    )
  )
)
