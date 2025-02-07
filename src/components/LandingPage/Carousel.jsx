import ActionMenu from "@pluralsight/ps-design-system-actionmenu";
import { BelowRight } from "@pluralsight/ps-design-system-position";
import Card from "@pluralsight/ps-design-system-card";
import Carousel from "@pluralsight/ps-design-system-carousel";
import { MoreIcon } from "@pluralsight/ps-design-system-icon";
import React from "react";
import img_sample from "../../assets/img/sample-image-1.png"

function Example() {
	return (
		<Carousel size={Carousel.sizes.wide}>
			{MOCK_DATA.courses.map((course) => (
				<Carousel.Item key={course.id}>
					<Toggle>
						{({ active, toggle }) => (
							<Card
								style={{ backgroundColor: "#D0DBFF" }}
								image={<Card.Image src={img_sample} />}
								metadata1={[course.author, course.level]}
								title={<Card.Title>{course.title}</Card.Title>}
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
										<Card.Action title="See more" icon={<MoreIcon />} onClick={toggle} />
									</BelowRight>,
								]}
							/>
						)}
					</Toggle>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default Example;

function Toggle(props) {
	const [active, setActive] = React.useState(
		typeof props.active === "undefined" ? !!props.startActive : !!props.active,
	);

	function toggle() {
		setActive(!active);
	}

	return props.children({ active, toggle });
}

const MOCK_DATA = {
	courses: [
		{
			author: "Jim Cooper",
			id: "1",
			level: "Intermediate",
			title: "Vue.js Fundamentals",
		},
		{
			author: "Mark Heath",
			id: "2",
			level: "Intermediate",
			title: "Azure Functions Fundamentals",
		},
		{
			author: "Kyle Simpson",
			id: "3",
			level: "Advanced",
			title: "Advanced JavaScript",
		},
		{
			author: "Mark Zamoyta",
			id: "4",
			level: "Advanced",
			title: "Rapid JavaScript Training",
		},
		{
			author: "Dan Wahlin",
			id: "5",
			level: "Advanced",
			title: "Structuring JavaScript Code",
		},
		{
			author: "Jim Cooper",
			id: "6",
			level: "Advanced",
			title: "JavaScript Objects and PropTypes",
		},
		{
			author: "Jim Cooper",
			id: "11",
			level: "Intermediate",
			title: "Vue.js Fundamentals",
		},
		{
			author: "Mark Heath",
			id: "12",
			level: "Intermediate",
			title: "Azure Functions Fundamentals",
		},
		{
			author: "Kyle Simpson",
			id: "13",
			level: "Advanced",
			title: "Advanced JavaScript",
		},
		{
			author: "Mark Zamoyta",
			id: "14",
			level: "Advanced",
			title: "Rapid JavaScript Training",
		},
		{
			author: "Dan Wahlin",
			id: "15",
			level: "Advanced",
			title: "Structuring JavaScript Code",
		},
		{
			author: "Jim Cooper",
			id: "16",
			level: "Advanced",
			title: "JavaScript Objects and PropTypes",
		},
		{
			author: "Jim Cooper",
			id: "21",
			level: "Intermediate",
			title: "Vue.js Fundamentals",
		},
		{
			author: "Mark Heath",
			id: "22",
			level: "Intermediate",
			title: "Azure Functions Fundamentals",
		},
		{
			author: "Kyle Simpson",
			id: "23",
			level: "Advanced",
			title: "Advanced JavaScript",
		},
		{
			author: "Mark Zamoyta",
			id: "24",
			level: "Advanced",
			title: "Rapid JavaScript Training",
		},
		{
			author: "Dan Wahlin",
			id: "25",
			level: "Advanced",
			title: "Structuring JavaScript Code",
		},
		{
			author: "Jim Cooper",
			id: "26",
			level: "Advanced",
			title: "JavaScript Objects and PropTypes",
		},
	],
};


