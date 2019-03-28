import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.util.Random

class ImporterSimulation extends Simulation {

  val testRun = 7

  def json(index: Int) = {
    val journalCount = 17
    val journal = index % journalCount

    s"""
       |{"data":
       |{"manuscriptNumber":"test-$testRun-$index","title":"No text $testRun-$index","doi":"10.1007/$testRun-$index","journal":"test-$journal","indexingSuppressed":false,
       |"publicationDate":"Jun 26, 2020 11:11:11 AM",
       |"authors":[
       |{"id":"0a13bebb-188e-49c4-a8e9-29ecbe933530","lastName":"Khachatryan","firstName":"V.","correspondingAuthor":true,
       |  "email": "test@test.org", "phone": "1234",
       |  "city":"Yerevan","country":"Armenia","institutionIds":["3536af19-790f-4d56-b16c-eaa200449732"]}],
       |  "institutions":[{"id":"3536af19-790f-4d56-b16c-eaa200449732","name":"Yerevan Physics Institute","country":"Armenia","city":"Yerevan","indexingSuppressed":false}],
       |  "fundingBodies":[{"id":"c164138f-4f9e-407a-b7f9-aa9986e27459","name":"Austrian Federal Ministry of Science, Research and Economy"}]}}
       |""".stripMargin
  }

  val staging = "http://nemo-npo-importer.dev.cf.private.springer.com/article/meta"
  val local = "http://localhost:9000/article/meta"
  val httpConf = http.baseUrl(staging)

  val n = 5
  val scn = scenario("ImporterSimulation")
    .repeat(10, "index") {
        exec { session =>
          // val index = session("index").as[Int]
          val index = Random.nextInt(10000)
          val data = json(index)
          session.set("data", data)
        }.exec(
          http("request")
            .post("")
            .header("Content-Type", "application/json")
            .header("Authorization", "Basic bmVtby1ucG86JWpVIjYnQi9WcVo8NjVudA==")
            .body(StringBody("${data}")).asJson
        )
      }


  setUp(
    scn.inject(atOnceUsers(100))
  ).protocols(httpConf)
}
