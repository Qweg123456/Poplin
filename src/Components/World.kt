package Components

import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import org.w3c.dom.css.CSSStyleDeclaration
import kotlin.browser.document

/**
 * Created by jormar on 5/30/17.
 */

class World : Component() {

    override var view = document.getElementsByTagName("body").get(0) as HTMLElement

    init {

    }

    fun step() {
        rAcc = (Math.random() - 0.5) / 1.0
        bAcc = (Math.random() - 0.5) / 1.0
        gAcc = (Math.random() - 0.5) / 1.0

        rAcc = Math.min(maxAcc, rAcc)
        gAcc = Math.min(maxAcc, gAcc)
        bAcc = Math.min(maxAcc, bAcc)
        rAcc = Math.max(-maxAcc, rAcc)
        gAcc = Math.max(-maxAcc, gAcc)
        bAcc = Math.max(-maxAcc, bAcc)

        rVel += rAcc
        gVel += gAcc
        bVel += bAcc

        rVel = Math.min(maxVel, rVel)
        gVel = Math.min(maxVel, gVel)
        bVel = Math.min(maxVel, bVel)
        rVel = Math.max(-maxVel, rVel)
        gVel = Math.max(-maxVel, gVel)
        bVel = Math.max(-maxVel, bVel)

        rVel *= 0.995
        gVel *= 0.995
        bVel *= 0.995

        r += rVel
        g += gVel
        b += bVel

        r = Math.min(200.0, r)
        g = Math.min(200.0, g)
        b = Math.min(200.0, b)
        r = Math.max(50.0, r)
        g = Math.max(50.0, g)
        b = Math.max(50.0, b)

        //println("rgb(" + this.r + ", " + this.g + ", " + this.b + ")");
        //println("rgbVel(" + this.rVel + ", " + this.gVel + ", " + this.bVel + ")");
        //println("rgbAcc(" + this.rAcc + ", " + this.gAcc + ", " + this.bAcc + ")");
    }



}
