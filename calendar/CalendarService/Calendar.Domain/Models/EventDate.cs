namespace Calendar.Domain.Models;

public class EventDate
{
    private EventDate(DateOnly value)
    {
        Value = value;
    }

    internal DateOnly Value { get; }

    internal static EventDate Create(DateOnly eventDate)
    {
        if (eventDate < DateOnly.FromDateTime(DateTime.Now))
        {
            throw new ArgumentException("event cannot be created in the past", nameof(eventDate));
        }
        
        return new EventDate(eventDate);
    }

    public bool MatchesMonthAndYear(DateOnly date) => Value.Month == date.Month && Value.Year == date.Year;


    public static implicit operator DateOnly(EventDate eventDate) => eventDate.Value;
}