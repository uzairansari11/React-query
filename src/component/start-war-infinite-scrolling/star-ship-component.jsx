import React from "react";

export const StarshipComponent = ({
	name,
	model,
	starshipClass,
	length,
	maxAtmospheringSpeed,
	crew,
	passengers,
	cargoCapacity,
	consumables,
	costInCredits,
	hyperdriveRating,
}) => {
	return (
		<div className="starship-card">
			<h2 className="starship-name">{name}</h2>
			<p className="starship-info">
				<strong>Model:</strong> {model}
			</p>
			<p className="starship-info">
				<strong>Class:</strong> {starshipClass}
			</p>
			<p className="starship-info">
				<strong>Length:</strong> {length} meters
			</p>
			<p className="starship-info">
				<strong>Max Speed:</strong> {maxAtmospheringSpeed} km/h
			</p>
			<p className="starship-info">
				<strong>Crew:</strong> {crew}
			</p>
			<p className="starship-info">
				<strong>Passengers:</strong> {passengers}
			</p>
			<p className="starship-info">
				<strong>Cargo Capacity:</strong> {cargoCapacity} kg
			</p>
			<p className="starship-info">
				<strong>Consumables:</strong> {consumables}
			</p>
			<p className="starship-info">
				<strong>Cost:</strong> {costInCredits} credits
			</p>
			<p className="starship-info">
				<strong>Hyperdrive Rating:</strong> {hyperdriveRating}
			</p>

			{/* Inline CSS */}
			<style>{`
				.starship-card {
					background-color: #fff;
					padding: 20px;
					margin: 20px;
					border-radius: 8px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					text-align: left;
					transition: transform 0.3s ease-in-out;
				}

				.starship-card:hover {
					transform: translateY(-5px);
				}

				.starship-name {
					font-size: 1.8rem;
					font-weight: bold;
					color: #333;
					margin-bottom: 12px;
					text-align: center;
				}

				.starship-info {
					font-size: 1rem;
					color: #555;
					margin: 8px 0;
				}

				.starship-info strong {
					color: #222;
				}
			`}</style>
		</div>
	);
};
