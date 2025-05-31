export class HTTPError extends Error {
	status: number;
	statusText: string;
	body: string;

	constructor(response: Response, body: string) {
		const message = `HTTP error ${response.status}: ${response.statusText}\n${body}`;
		super(message);
		this.name = this.constructor.name;
		this.status = response.status;
		this.statusText = response.statusText;
		this.body = body;
		Object.setPrototypeOf(this, new.target.prototype);
	}

	async parseErrorMessage() {
		try {
			const data = (await JSON.parse(this.body)) as { code: string; message: string };
			return data.message;
		} catch (e) {
			return this.message;
		}
	}
}
