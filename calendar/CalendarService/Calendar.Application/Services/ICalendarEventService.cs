using Calendar.Application.Contracts;

namespace Calendar.Application.Services;

public interface ICalendarEventService
{
    public IEnumerable<CalendarEvent> GetCalendarEvents(DateOnly date);

    public CalendarEvent CreateCalendarEvent(CreateCalendarEventRequest createCalendarEventRequest);
    
    public CalendarEvent GetCalendarEvent(string id);
}