using Calendar.Application.Contracts;

namespace Calendar.Application.Services;

public interface ICalendarEventService
{
    public IEnumerable<CalendarEvent> GetCalendarEvents(int year, int month);

    public CalendarEvent CreateCalendarEvent(CreateCalendarEventRequest createCalendarEventRequest);
}