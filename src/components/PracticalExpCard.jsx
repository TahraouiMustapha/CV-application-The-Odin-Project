
export function PracticalExperienceCard() {
    return (
        <div>
            <form>
                <p>
                    <label htmlFor="company-name">Company Name: </label>
                    <input type="text"
                    name="company-name"
                    id="company-name" />
                </p>
                
                <p>
                    <label htmlFor="position">Position: </label>
                    <input type="text"
                    name="position"
                    id="position" />
                </p>

                <div className="career-time">
                    <p>
                        <label htmlFor="from-date">From: </label>
                        <input type="date"
                        name="from-date"
                        id="from-date" />
                    </p>

                    <p>
                        <label htmlFor="to-date">To: </label>
                        <input type="date"
                        name="to-date"
                        id="to-date" />
                    </p>
                </div>

                <p>
                    <label htmlFor="details">Details: </label>
                    <textarea name="details" id="details"></textarea>
                </p>

                <button>submit</button>
            </form>
        </div>
    )
}