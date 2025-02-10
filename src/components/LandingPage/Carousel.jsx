import ActionMenu from "@pluralsight/ps-design-system-actionmenu"
import { BelowRight } from "@pluralsight/ps-design-system-position"
import Card from "@pluralsight/ps-design-system-card"
import Carousel from "@pluralsight/ps-design-system-carousel"
import { MoreIcon } from "@pluralsight/ps-design-system-icon"
import React from "react"
import img_banner from "../../assets/img/sample-image-1.png"
import img_banner1 from "../../assets/img/carousel/banner1.jpg"
import img_banner2 from "../../assets/img/carousel/banner2.jpg"
import img_banner3 from "../../assets/img/carousel/banner3.jpg"
import img_banner4 from "../../assets/img/carousel/banner4.jpg"
import img_banner5 from "../../assets/img/carousel/banner5.jpeg"
import img_banner6 from "../../assets/img/carousel/banner6.jpg"
import img_banner7 from "../../assets/img/carousel/banner7.jpg"

function Example() {
  return (
    <Carousel size={Carousel.sizes.wide}>
      {MOCK_DATA.courses.map((course) => (
        <Carousel.Item key={course.id}>
          <Toggle>
            {({ active, toggle }) => (
              <Card
                style={{ backgroundColor: "#D0DBFF50", color: "white" }}
                image={<Card.Image src={course.image} />}
                title={
                  <Card.Title className="py-2 text-center">
                    {course.title}
                  </Card.Title>
                }
                actionBarVisible
                actionBar={[
                  <BelowRight
                    inNode={typeof document !== "undefined" && document.body}
                    when={active}
                    show={
                      <ActionMenu onClick={toggle}>
                        <ActionMenu.Item>Useless item</ActionMenu.Item>
                        <ActionMenu.Item>Useless item</ActionMenu.Item>
                        <ActionMenu.Item>Useless item</ActionMenu.Item>
                        <ActionMenu.Item>Useless item</ActionMenu.Item>
                        <ActionMenu.Item>Useless item</ActionMenu.Item>
                        <ActionMenu.Item>Useless item</ActionMenu.Item>
                        <ActionMenu.Item>Useless item</ActionMenu.Item>
                        <ActionMenu.Item>Useless item</ActionMenu.Item>
                      </ActionMenu>
                    }
                    key="a"
                  >
                    <Card.Action
                      title="See more"
                      icon={<MoreIcon />}
                      onClick={toggle}
                    />
                  </BelowRight>,
                ]}
              />
            )}
          </Toggle>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Example

function Toggle(props) {
  const [active, setActive] = React.useState(
    typeof props.active === "undefined" ? !!props.startActive : !!props.active
  )

  function toggle() {
    setActive(!active)
  }

  return props.children({ active, toggle })
}

const MOCK_DATA = {
  courses: [
    {
      image: img_banner,
      id: "1",
      title: "Battle Fundamentals",
    },
    {
      image: img_banner1,
      id: "2",
      title: "Move Precission",
    },
    {
      image: img_banner2,
      id: "3",
      title: "Advanced war",
    },
    {
      image: img_banner3,
      id: "4",
      title: "Rapid  Training",
    },
    {
      image: img_banner4,
      id: "5",
      title: "Monica trainee",
    },
    {
      image: img_banner5,
      id: "6",
      title: " Objects and PropTypes",
    },
    {
      image: img_banner6,
      id: "11",
      title: "Hero Review",
    },
    {
      image: img_banner7,
      id: "12",
      title: "Funny Emoji",
    },
    {
      image: img_banner,
      id: "13",
      title: "Advanced war",
    },
    {
      image: img_banner1,
      id: "14",
      title: "Rapid  Training",
    },
    {
      image: img_banner2,
      id: "15",
      title: "Structuring Code",
    },
    {
      image: img_banner3,
      id: "16",
      title: " Objects and PropTypes",
    },
  ],
}
