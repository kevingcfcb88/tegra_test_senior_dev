FROM mcr.microsoft.com/dotnet/core/sdk:3.1 as build
WORKDIR /app
COPY ["backend_artfx.csproj", "./"]
RUN dotnet restore "./backend_artfx.csproj"
COPY . .
RUN dotnet build "backend_artfx.csproj" -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS final
WORKDIR /app
EXPOSE 80
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "backend_artfx.dll"]
