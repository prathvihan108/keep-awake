export default async function handler(req, res) {
	const BACKEND_URL = "https://task-tracker-a3ol.onrender.com/health";

	try {
		const response = await fetch(BACKEND_URL);
		console.log("Pinged:", response.status);
		res.status(200).send("Pinged backend successfully!");
	} catch (error) {
		console.error("Error pinging backend:", error);
		res.status(500).send("Failed to ping backend");
	}
}
