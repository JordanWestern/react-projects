namespace Calendar.Application.Contracts;

public record CreateCalendarEventRequest(string Name, DateOnly EventDate);