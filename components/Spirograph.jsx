"use client"

import { useEffect, useRef } from 'react'
import debounce from 'lodash/debounce'
import Image from 'next/image'

import { browserLog } from '../utils/log'

browserLog()

export const Spirograph = () => {
    const movingCanvasContainer = useRef()
    const plottingCanvasContainer = useRef()
    let movingCanvas
    let plottingCanvas
    let isMounted

    //canvas
    let windowWidth
    let size
    let mctx
    let pctx

    // config
    const dotSize = 7
    const lineColor = '#7b7875';
    const circleColor = 'transparent'
    const lowSpeed = 0.012
    const highSpeed = 0.07
    const lineWidth = 1.2

    // seed values
    let randomM
    let randomN
    let f

    // gear values
    let m
    let n
    let speed = lowSpeed
    let gearRadius
    let angle
    let centerX
    let centerY
    let gearX
    let gearY
    let spiroX
    let spiroY

    useEffect(() => {
        isMounted = true
        window.addEventListener('resize', resizeHandler)
        movingCanvas = movingCanvasContainer.current
        plottingCanvas = plottingCanvasContainer.current
        mctx = movingCanvas.getContext('2d')
        pctx = plottingCanvas.getContext('2d')
        mctx.lineWidth = lineWidth
        pctx.lineWidth = lineWidth
        windowWidth = window.innerWidth
        setCanvasSize()
        initSpirograph()
        window.requestAnimationFrame(draw)
        return function cleanup() {
            window.removeEventListener('resize', resizeHandler)
            isMounted = false
        }
    })

    const resizeHandler = debounce(() => {
        //check if window size has actually changed bc of iOS Safari Bug
        if (window.innerWidth !== windowWidth) {
            setCanvasSize()
            initSpirograph()
            windowWidth = window.innerWidth
        } else {
            return
        }
    }, 500)

    const setCanvasSize = () => {
        const canvasSize = Math.min(
            1000,
            window?.innerWidth / 1.4 + 2,
            window?.innerHeight / 1.4 + 2
        )
        movingCanvas.width = canvasSize
        movingCanvas.height = canvasSize
        plottingCanvas.width = canvasSize
        plottingCanvas.height = canvasSize
    }

    const reduceFraction = (numerator, denominator) => {
        var gcd = function (a, b) {
            return b ? gcd(b, a % b) : a
        }
        gcd = gcd(numerator, denominator)
        return [numerator / gcd, denominator / gcd]
    }

    const speedUp = () => {
        speed = highSpeed
    }

    const speedDown = () => {
        speed = lowSpeed
    }

    const delay = (t) => new Promise((resolve) => setTimeout(resolve, t))

    const initSpirograph = () => {
        // calculate size based on window size
        size = Math.min(
            498,
            Math.min(window.innerWidth / 2.8, window.innerHeight / 2.8)
        )

        // clear canvas
        mctx.clearRect(0, 0, movingCanvas?.width, movingCanvas?.height)
        pctx.clearRect(0, 0, movingCanvas?.width, movingCanvas?.height)

        // get seed values
        randomM = Math.floor(Math.random() * (100 - 3)) + 3
        randomN =
            Math.floor(Math.random() * (randomM / 2 - randomM / 10)) +
            Math.floor(randomM / 10 + 1)
        n = reduceFraction(randomN, randomM)[0]
        m = reduceFraction(randomN, randomM)[1]
        gearRadius = n / m
        f = Math.random() * (0.9 - 0.2) + 0.2

        // initial gear values
        angle = 0
        centerX = movingCanvas.width / 2
        centerY = movingCanvas.height / 2
        gearX = (1 - gearRadius) * Math.cos(angle) * size
        gearY = (1 - gearRadius) * Math.sin(angle) * size
        spiroX =
            centerX +
            ((1 - gearRadius) * Math.cos(angle) +
                f * gearRadius * Math.cos((1 / gearRadius - 1) * angle)) *
            size
        spiroY =
            centerY +
            ((1 - gearRadius) * Math.sin(angle) -
                f * gearRadius * Math.sin((1 / gearRadius - 1) * angle)) *
            size
        mctx.strokeStyle = circleColor;

        // plot outer circle
        pctx.strokeStyle = circleColor;
        pctx.beginPath()
        pctx.arc(centerX, centerY, size, 0, 2 * Math.PI)
        pctx.stroke()
        pctx.strokeStyle = circleColor;
    }

    const draw = () => {
        if (isMounted === true) {
            // clear moving canvas
            mctx.clearRect(0, 0, movingCanvas.width, movingCanvas.height)

            // gear
            mctx.beginPath()
            mctx.arc(
                centerX + gearX,
                centerY + gearY,
                gearRadius * size,
                0,
                2 * Math.PI
            )
            mctx.stroke()

            // inner gear
            mctx.beginPath()
            mctx.arc(
                centerX + gearX,
                centerY + gearY,
                f * gearRadius * size,
                0,
                2 * Math.PI
            )
            mctx.stroke()

            // drawing dot
            mctx.beginPath()
            mctx.arc(
                centerX +
                ((1 - gearRadius) * Math.cos(angle) +
                    f * gearRadius * Math.cos((1 / gearRadius - 1) * angle)) *
                size,
                centerY +
                ((1 - gearRadius) * Math.sin(angle) -
                    f * gearRadius * Math.sin((1 / gearRadius - 1) * angle)) *
                size,
                dotSize,
                0,
                2 * Math.PI
            )
            mctx.stroke()

            if (angle - speed < n * 2 * Math.PI) {
                pctx.beginPath()
                pctx.moveTo(spiroX, spiroY)
                spiroX =
                    centerX +
                    ((1 - gearRadius) * Math.cos(angle) +
                        f * gearRadius * Math.cos((1 / gearRadius - 1) * angle)) *
                    size
                spiroY =
                    centerY +
                    ((1 - gearRadius) * Math.sin(angle) -
                        f * gearRadius * Math.sin((1 / gearRadius - 1) * angle)) *
                    size
                pctx.lineTo(spiroX, spiroY)
                pctx.stroke()
            } else {
                let logo = document.getElementById('logo')
                logo.classList.add('rotate-image')
                mctx.clearRect(0, 0, movingCanvas.width, movingCanvas.height)
                delay(3000)
                    .then(() => logo.classList.remove('rotate-image'))
                    .then(() => initSpirograph())
                    .then(() => window.requestAnimationFrame(draw))
                return
            }

            gearX = (1 - gearRadius) * Math.cos(angle) * size
            gearY = (1 - gearRadius) * Math.sin(angle) * size
            angle += speed

            pctx.strokeStyle = lineColor;
            // draw next frame
            window.requestAnimationFrame(draw)
        } else {
            return
        }
    }

    return (
        <section className='relative flex flex-col items-center justify-center sm:h-[calc(100vh-50px)] h-[calc(100vh-100px)] w-full'>
            <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full sm:h-[calc(100vh-200px)] h-[calc(100vh-300px)] overflow-hidden mx-auto'>
                <div className='cursor-pointer absolute w-full h-full flex items-center justify-center'>
                    <canvas ref={plottingCanvasContainer} />
                    <Image
                        id="logo"
                        src='/assets/hero.gif'
                        alt='logo'
                        width="150"
                        height="150"
                        priority
                        className='absolute m-auto opacity-90 bg-gradient-to-tl from-[#F5F5F5] to-orange-50 rounded-full sm:scale-100 scale-75 z-10 grayscale-[0.6]'
                    />
                </div>
                <div className='cursor-pointer absolute w-full h-full flex items-center justify-center'
                    onMouseDown={speedUp}
                    onMouseUp={speedDown}
                    onTouchStart={speedUp}
                    onTouchEnd={speedDown}
                >
                    <canvas ref={movingCanvasContainer} />
                </div>
            </div>
        </section>
    )
}