namespace Calendar.Application.Contracts;

public record CalendarEvent(string Id, string Name, DateOnly EventDate);