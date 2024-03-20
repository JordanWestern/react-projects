namespace Calendar.Domain.Models;

public class EventId
{
    private EventId(Guid value)
    {
        Value = value;
    }

    public Guid Value { get; }

    internal static EventId Create() => new(Guid.NewGuid());

    public static implicit operator string(EventId eventId) => eventId.Value.ToString();
}