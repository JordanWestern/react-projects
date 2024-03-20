namespace Calendar.Domain.Models;

public class CalendarEvent
{
    private CalendarEvent(EventId id, EventName name, EventDate date)
    {
        Id = id;
        Name = name;
        Date = date;
    }

    public EventId Id { get; }

    public EventName Name { get; }

    public EventDate Date { get; }

    public static CalendarEvent Create(string eventName, DateOnly eventDate) => new(EventId.Create(), EventName.Create(eventName), EventDate.Create(eventDate));
}