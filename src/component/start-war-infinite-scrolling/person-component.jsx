import React from "react";

const PersonComponent = ({ name, hairColor, eyeColor }) => {
	return (
		<div className="person-card">
			<h3 className="person-name">{name}</h3>
			<p className="person-detail">Hair Color: {hairColor}</p>
			<p className="person-detail">Eye Color: {eyeColor}</p>

			{/* Inline CSS */}
			<style>{`
				.person-card {
					background-color: #fff;
					padding: 16px;
					margin: 10px;
					border-radius: 8px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					width: 250px;
					text-align: center;
					transition: transform 0.3s ease-in-out;
				}

				.person-card:hover {
					transform: translateY(-5px);
				}

				.person-name {
					font-size: 1.4rem;
					font-weight: bold;
					color: #333;
					margin-bottom: 8px;
				}

				.person-detail {
					color: #555;
					font-size: 1.1rem;
					margin: 5px 0;
				}
			`}</style>
		</div>
	);
};

export default PersonComponent;
