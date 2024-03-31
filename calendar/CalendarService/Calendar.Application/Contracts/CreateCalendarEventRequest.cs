namespace Calendar.Application.Contracts;

public record CreateCalendarEventRequest(string Name, string Description, DateOnly EventDate);