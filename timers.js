class timer {
	constructor(setpoint, trigger, reset, timeStamp) {

		// Declare internal variables
		let output, remaining, elapsed;

		// Determine object's elements
		this.setpoint	= setpoint;												// Setpoint in the desired engineering unit
		this.trigger	= trigger;												// Trigger that starts time count
		this.reset		= reset;												// Clear count and starts everything over again
		this.timeStamp	= timeStamp;											// Set the period between one count to the next (i.e. 1 = 1ms, 1000 = 1s, 60000 = 1 min, etc.)
		this.output		= output;												// Output coil
		this.elapsed	= elapsed;												// Elapsed time while trigger = true
		this.remaining	= remaining;											// Remaining time to set the output = true

		// Internal computing
		if(this.trigger == true){
			setTimeout(function(){
				this.elapsed = this.elapsed + 1;
				this.remaining = this.setpoint - this.elapsed;
			}, this.timeStamp);
		}
		else if (this.reset != false) {
			this.output = false;
			this.remaining = SP;
			this.elapsed = 0;
		}else{
			this.output = false;
		}
	}
}