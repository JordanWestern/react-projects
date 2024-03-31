namespace Calendar.Application.Contracts;

public record NullCalendarEvent() : CalendarEvent(string.Empty, string.Empty, string.Empty, DateOnly.MinValue);