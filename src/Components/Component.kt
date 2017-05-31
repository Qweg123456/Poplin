package Components

import org.w3c.dom.HTMLElement
import org.w3c.dom.css.CSSStyleDeclaration

/**
 * Created by jormar on 5/30/17.
 */

abstract class Component {
    var r = 0.0
    var g = 0.0
    var b = 0.0
    var rVel = 0.0
    var gVel = 0.0
    var bVel = 0.0
    var rAcc = 0.0
    var gAcc = 0.0
    var bAcc = 0.0

    var maxVel = 3.0
    var maxAcc = 1.0

    abstract var view: HTMLElement

    fun updateView() {
        val css: CSSStyleDeclaration? = view?.style
        css?.background = "rgb(" + Math.round(this.r) + ", " + Math.round(this.g) + ", " + Math.round(this.b) + ")"
        println("rgb(" + this.r + ", " + this.g + ", " + this.b + ")")
        println(css?.background)
    }

}