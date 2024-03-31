namespace Calendar.Domain.Models;

public class CalendarEvent
{
    private CalendarEvent(EventId id, EventName name, EventDescription description, EventDate date)
    {
        Id = id;
        Name = name;
        Description = description;
        Date = date;
    }

    public EventId Id { get; }

    public EventName Name { get; }

    public EventDescription Description { get; }

    public EventDate Date { get; }

    public static CalendarEvent Create(string eventName, string eventDescription, DateOnly eventDate) =>
        new(EventId.Create(), EventName.Create(eventName), EventDescription.Create(eventDescription),  EventDate.Create(eventDate));
}

public class EventDescription
{
    public EventDescription(string description)
    {
        Value = description;
    }

    public string Value { get; }

    internal static EventDescription Create(string description)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(description, nameof(description));
        return new EventDescription(description);
    }

    public static implicit operator string(EventDescription eventName) => eventName.Value;
}