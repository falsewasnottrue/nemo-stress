
import io.gatling.app.Gatling
import io.gatling.core.config.GatlingPropertiesBuilder

object SimulationRunner extends App {

  val simClass = classOf[ImporterSimulation].getName

  val props = new GatlingPropertiesBuilder
  //props.sou.sourcesDirectory("./src/main/scala")
  //props.binariesDirectory("./target/scala-2.11/classes")
  props.simulationClass(simClass)
  // props.runDescription(config.runDescription)
  //props.outputDirectoryBaseName(config.simulationId)

  Gatling.fromMap(props.build)

}
