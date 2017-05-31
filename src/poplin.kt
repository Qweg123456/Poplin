import Components.World
import kotlin.browser.window

/**
 * Created by jormar on 5/30/17.
 */
fun main(args: Array<String>) {
    val message = "Hello JavaScript!"
    println(message)

    val world: World = World()
    window.setInterval({
        world.step()
        world.updateView()
    }, 30)
}