using Calendar.Application.Services;
using Calendar.Domain.Repositories;
using Calendar.Infrastucture;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// TODO: for now
builder.Services.AddCors(options =>
{
    options.AddPolicy("Any",
        policyBuilder =>
        {
            policyBuilder
                .AllowAnyOrigin()
                .AllowAnyHeader();
        });
});

builder.Services.AddScoped<ICalendarEventService, CalendarEventService>();
builder.Services.AddSingleton<ICalendarEventsRepository, InMemoryRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("Any");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
